import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo46Component } from './lib45-demo46.component';

describe('Lib45Demo46Component', () => {
  let component: Lib45Demo46Component;
  let fixture: ComponentFixture<Lib45Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
