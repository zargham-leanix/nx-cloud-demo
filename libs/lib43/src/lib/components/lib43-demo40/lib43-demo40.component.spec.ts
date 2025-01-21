import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo40Component } from './lib43-demo40.component';

describe('Lib43Demo40Component', () => {
  let component: Lib43Demo40Component;
  let fixture: ComponentFixture<Lib43Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
