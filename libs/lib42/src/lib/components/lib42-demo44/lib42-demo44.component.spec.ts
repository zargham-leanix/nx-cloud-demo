import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo44Component } from './lib42-demo44.component';

describe('Lib42Demo44Component', () => {
  let component: Lib42Demo44Component;
  let fixture: ComponentFixture<Lib42Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
