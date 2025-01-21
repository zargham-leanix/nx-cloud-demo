import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo25Component } from './lib64-demo25.component';

describe('Lib64Demo25Component', () => {
  let component: Lib64Demo25Component;
  let fixture: ComponentFixture<Lib64Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
