import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo22Component } from './lib7-demo22.component';

describe('Lib7Demo22Component', () => {
  let component: Lib7Demo22Component;
  let fixture: ComponentFixture<Lib7Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
