import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo46Component } from './lib7-demo46.component';

describe('Lib7Demo46Component', () => {
  let component: Lib7Demo46Component;
  let fixture: ComponentFixture<Lib7Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
