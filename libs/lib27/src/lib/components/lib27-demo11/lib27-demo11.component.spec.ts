import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo11Component } from './lib27-demo11.component';

describe('Lib27Demo11Component', () => {
  let component: Lib27Demo11Component;
  let fixture: ComponentFixture<Lib27Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
