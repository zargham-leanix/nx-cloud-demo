import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo25Component } from './lib19-demo25.component';

describe('Lib19Demo25Component', () => {
  let component: Lib19Demo25Component;
  let fixture: ComponentFixture<Lib19Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
