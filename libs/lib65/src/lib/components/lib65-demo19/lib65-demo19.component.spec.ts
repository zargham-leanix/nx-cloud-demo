import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo19Component } from './lib65-demo19.component';

describe('Lib65Demo19Component', () => {
  let component: Lib65Demo19Component;
  let fixture: ComponentFixture<Lib65Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
