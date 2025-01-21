import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo16Component } from './lib43-demo16.component';

describe('Lib43Demo16Component', () => {
  let component: Lib43Demo16Component;
  let fixture: ComponentFixture<Lib43Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
