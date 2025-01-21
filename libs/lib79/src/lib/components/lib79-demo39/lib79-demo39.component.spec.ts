import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo39Component } from './lib79-demo39.component';

describe('Lib79Demo39Component', () => {
  let component: Lib79Demo39Component;
  let fixture: ComponentFixture<Lib79Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
