import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo16Component } from './lib34-demo16.component';

describe('Lib34Demo16Component', () => {
  let component: Lib34Demo16Component;
  let fixture: ComponentFixture<Lib34Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
