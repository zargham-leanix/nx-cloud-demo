import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo31Component } from './lib80-demo31.component';

describe('Lib80Demo31Component', () => {
  let component: Lib80Demo31Component;
  let fixture: ComponentFixture<Lib80Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
