import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo25Component } from './lib45-demo25.component';

describe('Lib45Demo25Component', () => {
  let component: Lib45Demo25Component;
  let fixture: ComponentFixture<Lib45Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
