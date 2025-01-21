import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo39Component } from './lib5-demo39.component';

describe('Lib5Demo39Component', () => {
  let component: Lib5Demo39Component;
  let fixture: ComponentFixture<Lib5Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
