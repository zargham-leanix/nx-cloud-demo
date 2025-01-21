import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo25Component } from './lib54-demo25.component';

describe('Lib54Demo25Component', () => {
  let component: Lib54Demo25Component;
  let fixture: ComponentFixture<Lib54Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
