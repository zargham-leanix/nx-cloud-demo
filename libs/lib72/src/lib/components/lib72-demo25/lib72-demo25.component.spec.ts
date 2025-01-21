import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo25Component } from './lib72-demo25.component';

describe('Lib72Demo25Component', () => {
  let component: Lib72Demo25Component;
  let fixture: ComponentFixture<Lib72Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
