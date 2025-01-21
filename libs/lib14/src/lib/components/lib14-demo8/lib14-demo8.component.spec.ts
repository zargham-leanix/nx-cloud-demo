import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo8Component } from './lib14-demo8.component';

describe('Lib14Demo8Component', () => {
  let component: Lib14Demo8Component;
  let fixture: ComponentFixture<Lib14Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
