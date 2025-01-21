import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo25Component } from './lib23-demo25.component';

describe('Lib23Demo25Component', () => {
  let component: Lib23Demo25Component;
  let fixture: ComponentFixture<Lib23Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
