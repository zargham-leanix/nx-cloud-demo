import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo25Component } from './lib86-demo25.component';

describe('Lib86Demo25Component', () => {
  let component: Lib86Demo25Component;
  let fixture: ComponentFixture<Lib86Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
