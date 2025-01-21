import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo25Component } from './lib27-demo25.component';

describe('Lib27Demo25Component', () => {
  let component: Lib27Demo25Component;
  let fixture: ComponentFixture<Lib27Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
