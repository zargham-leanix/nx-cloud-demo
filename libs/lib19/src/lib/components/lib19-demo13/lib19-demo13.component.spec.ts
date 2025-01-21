import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo13Component } from './lib19-demo13.component';

describe('Lib19Demo13Component', () => {
  let component: Lib19Demo13Component;
  let fixture: ComponentFixture<Lib19Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
