import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo34Component } from './lib81-demo34.component';

describe('Lib81Demo34Component', () => {
  let component: Lib81Demo34Component;
  let fixture: ComponentFixture<Lib81Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
