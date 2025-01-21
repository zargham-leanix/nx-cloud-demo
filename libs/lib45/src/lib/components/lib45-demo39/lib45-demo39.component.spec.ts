import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo39Component } from './lib45-demo39.component';

describe('Lib45Demo39Component', () => {
  let component: Lib45Demo39Component;
  let fixture: ComponentFixture<Lib45Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
