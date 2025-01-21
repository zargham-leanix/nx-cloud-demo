import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo23Component } from './lib19-demo23.component';

describe('Lib19Demo23Component', () => {
  let component: Lib19Demo23Component;
  let fixture: ComponentFixture<Lib19Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
