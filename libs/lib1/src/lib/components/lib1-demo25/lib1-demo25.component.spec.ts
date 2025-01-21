import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo25Component } from './lib1-demo25.component';

describe('Lib1Demo25Component', () => {
  let component: Lib1Demo25Component;
  let fixture: ComponentFixture<Lib1Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
