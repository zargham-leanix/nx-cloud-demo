import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo11Component } from './lib64-demo11.component';

describe('Lib64Demo11Component', () => {
  let component: Lib64Demo11Component;
  let fixture: ComponentFixture<Lib64Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
