import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo25Component } from './lib13-demo25.component';

describe('Lib13Demo25Component', () => {
  let component: Lib13Demo25Component;
  let fixture: ComponentFixture<Lib13Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
