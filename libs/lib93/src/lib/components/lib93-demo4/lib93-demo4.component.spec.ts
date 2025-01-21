import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo4Component } from './lib93-demo4.component';

describe('Lib93Demo4Component', () => {
  let component: Lib93Demo4Component;
  let fixture: ComponentFixture<Lib93Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
