import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo31Component } from './lib58-demo31.component';

describe('Lib58Demo31Component', () => {
  let component: Lib58Demo31Component;
  let fixture: ComponentFixture<Lib58Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
