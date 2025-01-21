import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo25Component } from './lib97-demo25.component';

describe('Lib97Demo25Component', () => {
  let component: Lib97Demo25Component;
  let fixture: ComponentFixture<Lib97Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
