import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo29Component } from './lib81-demo29.component';

describe('Lib81Demo29Component', () => {
  let component: Lib81Demo29Component;
  let fixture: ComponentFixture<Lib81Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
