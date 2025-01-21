import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo31Component } from './lib12-demo31.component';

describe('Lib12Demo31Component', () => {
  let component: Lib12Demo31Component;
  let fixture: ComponentFixture<Lib12Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
