import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo10Component } from './lib19-demo10.component';

describe('Lib19Demo10Component', () => {
  let component: Lib19Demo10Component;
  let fixture: ComponentFixture<Lib19Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
