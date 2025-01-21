import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo25Component } from './lib93-demo25.component';

describe('Lib93Demo25Component', () => {
  let component: Lib93Demo25Component;
  let fixture: ComponentFixture<Lib93Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
