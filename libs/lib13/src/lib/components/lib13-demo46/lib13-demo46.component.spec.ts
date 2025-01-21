import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo46Component } from './lib13-demo46.component';

describe('Lib13Demo46Component', () => {
  let component: Lib13Demo46Component;
  let fixture: ComponentFixture<Lib13Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
