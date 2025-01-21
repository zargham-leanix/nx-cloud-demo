import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo31Component } from './lib72-demo31.component';

describe('Lib72Demo31Component', () => {
  let component: Lib72Demo31Component;
  let fixture: ComponentFixture<Lib72Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
