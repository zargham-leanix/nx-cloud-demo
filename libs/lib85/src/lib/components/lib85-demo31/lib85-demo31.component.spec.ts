import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo31Component } from './lib85-demo31.component';

describe('Lib85Demo31Component', () => {
  let component: Lib85Demo31Component;
  let fixture: ComponentFixture<Lib85Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
