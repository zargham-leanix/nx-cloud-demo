import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo25Component } from './lib94-demo25.component';

describe('Lib94Demo25Component', () => {
  let component: Lib94Demo25Component;
  let fixture: ComponentFixture<Lib94Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
