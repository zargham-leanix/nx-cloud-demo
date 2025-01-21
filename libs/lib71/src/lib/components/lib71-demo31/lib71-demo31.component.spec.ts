import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo31Component } from './lib71-demo31.component';

describe('Lib71Demo31Component', () => {
  let component: Lib71Demo31Component;
  let fixture: ComponentFixture<Lib71Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
