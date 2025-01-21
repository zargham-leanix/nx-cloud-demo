import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo11Component } from './lib54-demo11.component';

describe('Lib54Demo11Component', () => {
  let component: Lib54Demo11Component;
  let fixture: ComponentFixture<Lib54Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
