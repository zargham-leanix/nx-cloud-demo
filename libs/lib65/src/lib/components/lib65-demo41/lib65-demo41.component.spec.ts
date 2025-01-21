import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo41Component } from './lib65-demo41.component';

describe('Lib65Demo41Component', () => {
  let component: Lib65Demo41Component;
  let fixture: ComponentFixture<Lib65Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
