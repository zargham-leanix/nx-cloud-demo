import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo17Component } from './lib64-demo17.component';

describe('Lib64Demo17Component', () => {
  let component: Lib64Demo17Component;
  let fixture: ComponentFixture<Lib64Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
