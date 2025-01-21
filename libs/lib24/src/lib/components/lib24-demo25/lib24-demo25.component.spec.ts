import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo25Component } from './lib24-demo25.component';

describe('Lib24Demo25Component', () => {
  let component: Lib24Demo25Component;
  let fixture: ComponentFixture<Lib24Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
