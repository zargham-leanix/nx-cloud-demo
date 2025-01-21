import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo4Component } from './lib30-demo4.component';

describe('Lib30Demo4Component', () => {
  let component: Lib30Demo4Component;
  let fixture: ComponentFixture<Lib30Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
