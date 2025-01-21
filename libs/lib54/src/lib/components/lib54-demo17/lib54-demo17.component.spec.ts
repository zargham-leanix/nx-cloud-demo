import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo17Component } from './lib54-demo17.component';

describe('Lib54Demo17Component', () => {
  let component: Lib54Demo17Component;
  let fixture: ComponentFixture<Lib54Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
