import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo16Component } from './lib13-demo16.component';

describe('Lib13Demo16Component', () => {
  let component: Lib13Demo16Component;
  let fixture: ComponentFixture<Lib13Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
