import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo46Component } from './lib42-demo46.component';

describe('Lib42Demo46Component', () => {
  let component: Lib42Demo46Component;
  let fixture: ComponentFixture<Lib42Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
