import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo43Component } from './lib97-demo43.component';

describe('Lib97Demo43Component', () => {
  let component: Lib97Demo43Component;
  let fixture: ComponentFixture<Lib97Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
