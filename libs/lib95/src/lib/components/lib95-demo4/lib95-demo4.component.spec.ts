import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo4Component } from './lib95-demo4.component';

describe('Lib95Demo4Component', () => {
  let component: Lib95Demo4Component;
  let fixture: ComponentFixture<Lib95Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
