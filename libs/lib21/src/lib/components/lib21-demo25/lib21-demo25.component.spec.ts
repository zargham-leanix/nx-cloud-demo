import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo25Component } from './lib21-demo25.component';

describe('Lib21Demo25Component', () => {
  let component: Lib21Demo25Component;
  let fixture: ComponentFixture<Lib21Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
