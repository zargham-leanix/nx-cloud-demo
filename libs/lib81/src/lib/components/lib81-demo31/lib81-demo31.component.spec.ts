import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo31Component } from './lib81-demo31.component';

describe('Lib81Demo31Component', () => {
  let component: Lib81Demo31Component;
  let fixture: ComponentFixture<Lib81Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
