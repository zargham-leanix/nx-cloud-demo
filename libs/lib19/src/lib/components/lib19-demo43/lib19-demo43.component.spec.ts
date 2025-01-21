import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo43Component } from './lib19-demo43.component';

describe('Lib19Demo43Component', () => {
  let component: Lib19Demo43Component;
  let fixture: ComponentFixture<Lib19Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
