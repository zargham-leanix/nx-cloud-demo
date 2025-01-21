import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo17Component } from './lib19-demo17.component';

describe('Lib19Demo17Component', () => {
  let component: Lib19Demo17Component;
  let fixture: ComponentFixture<Lib19Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
